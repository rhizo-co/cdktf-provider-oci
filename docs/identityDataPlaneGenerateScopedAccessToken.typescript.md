# `identityDataPlaneGenerateScopedAccessToken` Submodule <a name="`identityDataPlaneGenerateScopedAccessToken` Submodule" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDataPlaneGenerateScopedAccessToken <a name="IdentityDataPlaneGenerateScopedAccessToken" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token oci_identity_data_plane_generate_scoped_access_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

new identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken(scope: Construct, id: string, config: IdentityDataPlaneGenerateScopedAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig">IdentityDataPlaneGenerateScopedAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig">IdentityDataPlaneGenerateScopedAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDataPlaneGenerateScopedAccessTokenTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDataPlaneGenerateScopedAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDataPlaneGenerateScopedAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDataPlaneGenerateScopedAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDataPlaneGenerateScopedAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDataPlaneGenerateScopedAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference">IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference">IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDataPlaneGenerateScopedAccessTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDataPlaneGenerateScopedAccessTokenConfig <a name="IdentityDataPlaneGenerateScopedAccessTokenConfig" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.Initializer"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

const identityDataPlaneGenerateScopedAccessTokenConfig: identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.publicKey">publicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDataPlaneGenerateScopedAccessTokenTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#timeouts IdentityDataPlaneGenerateScopedAccessToken#timeouts}

---

### IdentityDataPlaneGenerateScopedAccessTokenTimeouts <a name="IdentityDataPlaneGenerateScopedAccessTokenTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.Initializer"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

const identityDataPlaneGenerateScopedAccessTokenTimeouts: identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#create IdentityDataPlaneGenerateScopedAccessToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#delete IdentityDataPlaneGenerateScopedAccessToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#update IdentityDataPlaneGenerateScopedAccessToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#create IdentityDataPlaneGenerateScopedAccessToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#delete IdentityDataPlaneGenerateScopedAccessToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#update IdentityDataPlaneGenerateScopedAccessToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference <a name="IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDataPlaneGenerateScopedAccessToken } from 'rhizo-co-terraform-provider-oci'

new identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDataPlaneGenerateScopedAccessTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---



