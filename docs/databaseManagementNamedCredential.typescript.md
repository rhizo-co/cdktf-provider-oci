# `databaseManagementNamedCredential` Submodule <a name="`databaseManagementNamedCredential` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementNamedCredential <a name="DatabaseManagementNamedCredential" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential oci_database_management_named_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

new databaseManagementNamedCredential.DatabaseManagementNamedCredential(scope: Construct, id: string, config: DatabaseManagementNamedCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig">DatabaseManagementNamedCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig">DatabaseManagementNamedCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.putContent">putContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetAssociatedResource">resetAssociatedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.putContent"></a>

```typescript
public putContent(value: DatabaseManagementNamedCredentialContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.putContent.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementNamedCredentialTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a>

---

##### `resetAssociatedResource` <a name="resetAssociatedResource" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetAssociatedResource"></a>

```typescript
public resetAssociatedResource(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementNamedCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isConstruct"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

databaseManagementNamedCredential.DatabaseManagementNamedCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformElement"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformResource"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementNamedCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementNamedCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementNamedCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementNamedCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference">DatabaseManagementNamedCredentialContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference">DatabaseManagementNamedCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.associatedResourceInput">associatedResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.contentInput">contentInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.associatedResource">associatedResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.content"></a>

```typescript
public readonly content: DatabaseManagementNamedCredentialContentOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference">DatabaseManagementNamedCredentialContentOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementNamedCredentialTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference">DatabaseManagementNamedCredentialTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `associatedResourceInput`<sup>Optional</sup> <a name="associatedResourceInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.associatedResourceInput"></a>

```typescript
public readonly associatedResourceInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.contentInput"></a>

```typescript
public readonly contentInput: DatabaseManagementNamedCredentialContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementNamedCredentialTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `associatedResource`<sup>Required</sup> <a name="associatedResource" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.associatedResource"></a>

```typescript
public readonly associatedResource: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementNamedCredentialConfig <a name="DatabaseManagementNamedCredentialConfig" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.Initializer"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

const databaseManagementNamedCredentialConfig: databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#compartment_id DatabaseManagementNamedCredential#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a></code> | content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#name DatabaseManagementNamedCredential#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#scope DatabaseManagementNamedCredential#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#type DatabaseManagementNamedCredential#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.associatedResource">associatedResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#associated_resource DatabaseManagementNamedCredential#associated_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#defined_tags DatabaseManagementNamedCredential#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#description DatabaseManagementNamedCredential#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#freeform_tags DatabaseManagementNamedCredential#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#id DatabaseManagementNamedCredential#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#compartment_id DatabaseManagementNamedCredential#compartment_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.content"></a>

```typescript
public readonly content: DatabaseManagementNamedCredentialContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#content DatabaseManagementNamedCredential#content}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#name DatabaseManagementNamedCredential#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#scope DatabaseManagementNamedCredential#scope}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#type DatabaseManagementNamedCredential#type}.

---

##### `associatedResource`<sup>Optional</sup> <a name="associatedResource" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.associatedResource"></a>

```typescript
public readonly associatedResource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#associated_resource DatabaseManagementNamedCredential#associated_resource}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#defined_tags DatabaseManagementNamedCredential#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#description DatabaseManagementNamedCredential#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#freeform_tags DatabaseManagementNamedCredential#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#id DatabaseManagementNamedCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementNamedCredentialTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#timeouts DatabaseManagementNamedCredential#timeouts}

---

### DatabaseManagementNamedCredentialContent <a name="DatabaseManagementNamedCredentialContent" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.Initializer"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

const databaseManagementNamedCredentialContent: databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#credential_type DatabaseManagementNamedCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.passwordSecretAccessMode">passwordSecretAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#password_secret_access_mode DatabaseManagementNamedCredential#password_secret_access_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#password_secret_id DatabaseManagementNamedCredential#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#role DatabaseManagementNamedCredential#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#user_name DatabaseManagementNamedCredential#user_name}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#credential_type DatabaseManagementNamedCredential#credential_type}.

---

##### `passwordSecretAccessMode`<sup>Required</sup> <a name="passwordSecretAccessMode" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.passwordSecretAccessMode"></a>

```typescript
public readonly passwordSecretAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#password_secret_access_mode DatabaseManagementNamedCredential#password_secret_access_mode}.

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#password_secret_id DatabaseManagementNamedCredential#password_secret_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#role DatabaseManagementNamedCredential#role}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#user_name DatabaseManagementNamedCredential#user_name}.

---

### DatabaseManagementNamedCredentialTimeouts <a name="DatabaseManagementNamedCredentialTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.Initializer"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

const databaseManagementNamedCredentialTimeouts: databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#create DatabaseManagementNamedCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#delete DatabaseManagementNamedCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#update DatabaseManagementNamedCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#create DatabaseManagementNamedCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#delete DatabaseManagementNamedCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_named_credential#update DatabaseManagementNamedCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementNamedCredentialContentOutputReference <a name="DatabaseManagementNamedCredentialContentOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.Initializer"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

new databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretAccessModeInput">passwordSecretAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretAccessMode">passwordSecretAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `passwordSecretAccessModeInput`<sup>Optional</sup> <a name="passwordSecretAccessModeInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretAccessModeInput"></a>

```typescript
public readonly passwordSecretAccessModeInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretAccessMode`<sup>Required</sup> <a name="passwordSecretAccessMode" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretAccessMode"></a>

```typescript
public readonly passwordSecretAccessMode: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementNamedCredentialContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialContent">DatabaseManagementNamedCredentialContent</a>

---


### DatabaseManagementNamedCredentialTimeoutsOutputReference <a name="DatabaseManagementNamedCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementNamedCredential } from 'rhizo-co-terraform-provider-oci'

new databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementNamedCredentialTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementNamedCredential.DatabaseManagementNamedCredentialTimeouts">DatabaseManagementNamedCredentialTimeouts</a>

---



