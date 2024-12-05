# `osmanagementSoftwareSource` Submodule <a name="`osmanagementSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementSoftwareSource <a name="OsmanagementSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source oci_osmanagement_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

new osmanagementSoftwareSource.OsmanagementSoftwareSource(scope: Construct, id: string, config: OsmanagementSoftwareSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig">OsmanagementSoftwareSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig">OsmanagementSoftwareSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetChecksumType">resetChecksumType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerEmail">resetMaintainerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerName">resetMaintainerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerPhone">resetMaintainerPhone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts"></a>

```typescript
public putTimeouts(value: OsmanagementSoftwareSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

---

##### `resetChecksumType` <a name="resetChecksumType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetChecksumType"></a>

```typescript
public resetChecksumType(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintainerEmail` <a name="resetMaintainerEmail" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerEmail"></a>

```typescript
public resetMaintainerEmail(): void
```

##### `resetMaintainerName` <a name="resetMaintainerName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerName"></a>

```typescript
public resetMaintainerName(): void
```

##### `resetMaintainerPhone` <a name="resetMaintainerPhone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerPhone"></a>

```typescript
public resetMaintainerPhone(): void
```

##### `resetParentId` <a name="resetParentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsmanagementSoftwareSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsmanagementSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.associatedManagedInstances">associatedManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList">OsmanagementSoftwareSourceAssociatedManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyFingerprint">gpgKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyId">gpgKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyUrl">gpgKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.packages">packages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentName">parentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.repoType">repoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference">OsmanagementSoftwareSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archTypeInput">archTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumTypeInput">checksumTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmailInput">maintainerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerNameInput">maintainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhoneInput">maintainerPhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmail">maintainerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerName">maintainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhone">maintainerPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedManagedInstances`<sup>Required</sup> <a name="associatedManagedInstances" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.associatedManagedInstances"></a>

```typescript
public readonly associatedManagedInstances: OsmanagementSoftwareSourceAssociatedManagedInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList">OsmanagementSoftwareSourceAssociatedManagedInstancesList</a>

---

##### `gpgKeyFingerprint`<sup>Required</sup> <a name="gpgKeyFingerprint" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyFingerprint"></a>

```typescript
public readonly gpgKeyFingerprint: string;
```

- *Type:* string

---

##### `gpgKeyId`<sup>Required</sup> <a name="gpgKeyId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyId"></a>

```typescript
public readonly gpgKeyId: string;
```

- *Type:* string

---

##### `gpgKeyUrl`<sup>Required</sup> <a name="gpgKeyUrl" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyUrl"></a>

```typescript
public readonly gpgKeyUrl: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.packages"></a>

```typescript
public readonly packages: number;
```

- *Type:* number

---

##### `parentName`<sup>Required</sup> <a name="parentName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentName"></a>

```typescript
public readonly parentName: string;
```

- *Type:* string

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.repoType"></a>

```typescript
public readonly repoType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeouts"></a>

```typescript
public readonly timeouts: OsmanagementSoftwareSourceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference">OsmanagementSoftwareSourceTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archTypeInput"></a>

```typescript
public readonly archTypeInput: string;
```

- *Type:* string

---

##### `checksumTypeInput`<sup>Optional</sup> <a name="checksumTypeInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumTypeInput"></a>

```typescript
public readonly checksumTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintainerEmailInput`<sup>Optional</sup> <a name="maintainerEmailInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmailInput"></a>

```typescript
public readonly maintainerEmailInput: string;
```

- *Type:* string

---

##### `maintainerNameInput`<sup>Optional</sup> <a name="maintainerNameInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerNameInput"></a>

```typescript
public readonly maintainerNameInput: string;
```

- *Type:* string

---

##### `maintainerPhoneInput`<sup>Optional</sup> <a name="maintainerPhoneInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhoneInput"></a>

```typescript
public readonly maintainerPhoneInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsmanagementSoftwareSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintainerEmail`<sup>Required</sup> <a name="maintainerEmail" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmail"></a>

```typescript
public readonly maintainerEmail: string;
```

- *Type:* string

---

##### `maintainerName`<sup>Required</sup> <a name="maintainerName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerName"></a>

```typescript
public readonly maintainerName: string;
```

- *Type:* string

---

##### `maintainerPhone`<sup>Required</sup> <a name="maintainerPhone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhone"></a>

```typescript
public readonly maintainerPhone: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementSoftwareSourceAssociatedManagedInstances <a name="OsmanagementSoftwareSourceAssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

const osmanagementSoftwareSourceAssociatedManagedInstances: osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances = { ... }
```


### OsmanagementSoftwareSourceConfig <a name="OsmanagementSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

const osmanagementSoftwareSourceConfig: osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.archType">archType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.checksumType">checksumType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerEmail">maintainerEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerName">maintainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerPhone">maintainerPhone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}.

---

##### `checksumType`<sup>Optional</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainerEmail`<sup>Optional</sup> <a name="maintainerEmail" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerEmail"></a>

```typescript
public readonly maintainerEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}.

---

##### `maintainerName`<sup>Optional</sup> <a name="maintainerName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerName"></a>

```typescript
public readonly maintainerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}.

---

##### `maintainerPhone`<sup>Optional</sup> <a name="maintainerPhone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerPhone"></a>

```typescript
public readonly maintainerPhone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsmanagementSoftwareSourceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#timeouts OsmanagementSoftwareSource#timeouts}

---

### OsmanagementSoftwareSourceTimeouts <a name="OsmanagementSoftwareSourceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

const osmanagementSoftwareSourceTimeouts: osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementSoftwareSourceAssociatedManagedInstancesList <a name="OsmanagementSoftwareSourceAssociatedManagedInstancesList" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

new osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get"></a>

```typescript
public get(index: number): OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference <a name="OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

new osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances">OsmanagementSoftwareSourceAssociatedManagedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsmanagementSoftwareSourceAssociatedManagedInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances">OsmanagementSoftwareSourceAssociatedManagedInstances</a>

---


### OsmanagementSoftwareSourceTimeoutsOutputReference <a name="OsmanagementSoftwareSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { osmanagementSoftwareSource } from 'rhizo-co-terraform-provider-oci'

new osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsmanagementSoftwareSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

---



