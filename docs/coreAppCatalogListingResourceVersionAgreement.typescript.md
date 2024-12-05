# `coreAppCatalogListingResourceVersionAgreement` Submodule <a name="`coreAppCatalogListingResourceVersionAgreement` Submodule" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreAppCatalogListingResourceVersionAgreement <a name="CoreAppCatalogListingResourceVersionAgreement" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement oci_core_app_catalog_listing_resource_version_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

new coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement(scope: Construct, id: string, config: CoreAppCatalogListingResourceVersionAgreementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig">CoreAppCatalogListingResourceVersionAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig">CoreAppCatalogListingResourceVersionAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreAppCatalogListingResourceVersionAgreementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreAppCatalogListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreAppCatalogListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreAppCatalogListingResourceVersionAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreAppCatalogListingResourceVersionAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreAppCatalogListingResourceVersionAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.eulaLink">eulaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.oracleTermsOfUseLink">oracleTermsOfUseLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference">CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeRetrieved">timeRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersionInput">listingResourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eulaLink`<sup>Required</sup> <a name="eulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.eulaLink"></a>

```typescript
public readonly eulaLink: string;
```

- *Type:* string

---

##### `oracleTermsOfUseLink`<sup>Required</sup> <a name="oracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.oracleTermsOfUseLink"></a>

```typescript
public readonly oracleTermsOfUseLink: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeouts"></a>

```typescript
public readonly timeouts: CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference">CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference</a>

---

##### `timeRetrieved`<sup>Required</sup> <a name="timeRetrieved" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeRetrieved"></a>

```typescript
public readonly timeRetrieved: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `listingResourceVersionInput`<sup>Optional</sup> <a name="listingResourceVersionInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersionInput"></a>

```typescript
public readonly listingResourceVersionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreAppCatalogListingResourceVersionAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreAppCatalogListingResourceVersionAgreementConfig <a name="CoreAppCatalogListingResourceVersionAgreementConfig" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.Initializer"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

const coreAppCatalogListingResourceVersionAgreementConfig: coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_id CoreAppCatalogListingResourceVersionAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_resource_version CoreAppCatalogListingResourceVersionAgreement#listing_resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#id CoreAppCatalogListingResourceVersionAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_id CoreAppCatalogListingResourceVersionAgreement#listing_id}.

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_resource_version CoreAppCatalogListingResourceVersionAgreement#listing_resource_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#id CoreAppCatalogListingResourceVersionAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreAppCatalogListingResourceVersionAgreementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#timeouts CoreAppCatalogListingResourceVersionAgreement#timeouts}

---

### CoreAppCatalogListingResourceVersionAgreementTimeouts <a name="CoreAppCatalogListingResourceVersionAgreementTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.Initializer"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

const coreAppCatalogListingResourceVersionAgreementTimeouts: coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#create CoreAppCatalogListingResourceVersionAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#delete CoreAppCatalogListingResourceVersionAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#update CoreAppCatalogListingResourceVersionAgreement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#create CoreAppCatalogListingResourceVersionAgreement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#delete CoreAppCatalogListingResourceVersionAgreement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#update CoreAppCatalogListingResourceVersionAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference <a name="CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreAppCatalogListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

new coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreAppCatalogListingResourceVersionAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a>

---



