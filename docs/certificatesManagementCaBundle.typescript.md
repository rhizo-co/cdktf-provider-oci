# `certificatesManagementCaBundle` Submodule <a name="`certificatesManagementCaBundle` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCaBundle <a name="CertificatesManagementCaBundle" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle oci_certificates_management_ca_bundle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCaBundle.CertificatesManagementCaBundle(scope: Construct, id: string, config: CertificatesManagementCaBundleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig">CertificatesManagementCaBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig">CertificatesManagementCaBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificatesManagementCaBundleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificatesManagementCaBundle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isConstruct"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCaBundle.CertificatesManagementCaBundle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformElement"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformResource"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CertificatesManagementCaBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatesManagementCaBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatesManagementCaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference">CertificatesManagementCaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.caBundlePemInput">caBundlePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.caBundlePem">caBundlePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.timeouts"></a>

```typescript
public readonly timeouts: CertificatesManagementCaBundleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference">CertificatesManagementCaBundleTimeoutsOutputReference</a>

---

##### `caBundlePemInput`<sup>Optional</sup> <a name="caBundlePemInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.caBundlePemInput"></a>

```typescript
public readonly caBundlePemInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificatesManagementCaBundleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a>

---

##### `caBundlePem`<sup>Required</sup> <a name="caBundlePem" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.caBundlePem"></a>

```typescript
public readonly caBundlePem: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCaBundleConfig <a name="CertificatesManagementCaBundleConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.Initializer"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCaBundleConfig: certificatesManagementCaBundle.CertificatesManagementCaBundleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.caBundlePem">caBundlePem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#ca_bundle_pem CertificatesManagementCaBundle#ca_bundle_pem}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#compartment_id CertificatesManagementCaBundle#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#name CertificatesManagementCaBundle#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#defined_tags CertificatesManagementCaBundle#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#description CertificatesManagementCaBundle#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#freeform_tags CertificatesManagementCaBundle#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#id CertificatesManagementCaBundle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `caBundlePem`<sup>Required</sup> <a name="caBundlePem" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.caBundlePem"></a>

```typescript
public readonly caBundlePem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#ca_bundle_pem CertificatesManagementCaBundle#ca_bundle_pem}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#compartment_id CertificatesManagementCaBundle#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#name CertificatesManagementCaBundle#name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#defined_tags CertificatesManagementCaBundle#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#description CertificatesManagementCaBundle#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#freeform_tags CertificatesManagementCaBundle#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#id CertificatesManagementCaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificatesManagementCaBundleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#timeouts CertificatesManagementCaBundle#timeouts}

---

### CertificatesManagementCaBundleTimeouts <a name="CertificatesManagementCaBundleTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.Initializer"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCaBundleTimeouts: certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#create CertificatesManagementCaBundle#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#delete CertificatesManagementCaBundle#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#update CertificatesManagementCaBundle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#create CertificatesManagementCaBundle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#delete CertificatesManagementCaBundle#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_ca_bundle#update CertificatesManagementCaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCaBundleTimeoutsOutputReference <a name="CertificatesManagementCaBundleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCaBundle } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatesManagementCaBundleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCaBundle.CertificatesManagementCaBundleTimeouts">CertificatesManagementCaBundleTimeouts</a>

---



