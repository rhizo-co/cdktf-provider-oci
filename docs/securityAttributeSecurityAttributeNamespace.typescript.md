# `securityAttributeSecurityAttributeNamespace` Submodule <a name="`securityAttributeSecurityAttributeNamespace` Submodule" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityAttributeSecurityAttributeNamespace <a name="SecurityAttributeSecurityAttributeNamespace" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace oci_security_attribute_security_attribute_namespace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

new securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace(scope: Construct, id: string, config: SecurityAttributeSecurityAttributeNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig">SecurityAttributeSecurityAttributeNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig">SecurityAttributeSecurityAttributeNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetIsRetired">resetIsRetired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityAttributeSecurityAttributeNamespaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRetired` <a name="resetIsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetIsRetired"></a>

```typescript
public resetIsRetired(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityAttributeSecurityAttributeNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityAttributeSecurityAttributeNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityAttributeSecurityAttributeNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.mode">mode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference">SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetiredInput">isRetiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetired">isRetired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.mode"></a>

```typescript
public readonly mode: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference">SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRetiredInput`<sup>Optional</sup> <a name="isRetiredInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetiredInput"></a>

```typescript
public readonly isRetiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecurityAttributeSecurityAttributeNamespaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRetired`<sup>Required</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetired"></a>

```typescript
public readonly isRetired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityAttributeSecurityAttributeNamespaceConfig <a name="SecurityAttributeSecurityAttributeNamespaceConfig" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.Initializer"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

const securityAttributeSecurityAttributeNamespaceConfig: securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#compartment_id SecurityAttributeSecurityAttributeNamespace#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#description SecurityAttributeSecurityAttributeNamespace#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#name SecurityAttributeSecurityAttributeNamespace#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#defined_tags SecurityAttributeSecurityAttributeNamespace#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#freeform_tags SecurityAttributeSecurityAttributeNamespace#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#id SecurityAttributeSecurityAttributeNamespace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.isRetired">isRetired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#is_retired SecurityAttributeSecurityAttributeNamespace#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#compartment_id SecurityAttributeSecurityAttributeNamespace#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#description SecurityAttributeSecurityAttributeNamespace#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#name SecurityAttributeSecurityAttributeNamespace#name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#defined_tags SecurityAttributeSecurityAttributeNamespace#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#freeform_tags SecurityAttributeSecurityAttributeNamespace#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#id SecurityAttributeSecurityAttributeNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRetired`<sup>Optional</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.isRetired"></a>

```typescript
public readonly isRetired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#is_retired SecurityAttributeSecurityAttributeNamespace#is_retired}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityAttributeSecurityAttributeNamespaceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#timeouts SecurityAttributeSecurityAttributeNamespace#timeouts}

---

### SecurityAttributeSecurityAttributeNamespaceTimeouts <a name="SecurityAttributeSecurityAttributeNamespaceTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.Initializer"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

const securityAttributeSecurityAttributeNamespaceTimeouts: securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#create SecurityAttributeSecurityAttributeNamespace#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#delete SecurityAttributeSecurityAttributeNamespace#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#update SecurityAttributeSecurityAttributeNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#create SecurityAttributeSecurityAttributeNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#delete SecurityAttributeSecurityAttributeNamespace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#update SecurityAttributeSecurityAttributeNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference <a name="SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityAttributeSecurityAttributeNamespace } from 'rhizo-co-terraform-provider-oci'

new securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityAttributeSecurityAttributeNamespaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a>

---



