# `marketplaceListingPackageAgreement` Submodule <a name="`marketplaceListingPackageAgreement` Submodule" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceListingPackageAgreement <a name="MarketplaceListingPackageAgreement" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement oci_marketplace_listing_package_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer"></a>

```typescript
import { marketplaceListingPackageAgreement } from 'rhizo-co-terraform-provider-oci'

new marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement(scope: Construct, id: string, config: MarketplaceListingPackageAgreementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig">MarketplaceListingPackageAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig">MarketplaceListingPackageAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplaceListingPackageAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct"></a>

```typescript
import { marketplaceListingPackageAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement"></a>

```typescript
import { marketplaceListingPackageAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource"></a>

```typescript
import { marketplaceListingPackageAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport"></a>

```typescript
import { marketplaceListingPackageAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MarketplaceListingPackageAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MarketplaceListingPackageAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MarketplaceListingPackageAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceListingPackageAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.contentUrl">contentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementIdInput">agreementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementId">agreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `author`<sup>Required</sup> <a name="author" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.contentUrl"></a>

```typescript
public readonly contentUrl: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `agreementIdInput`<sup>Optional</sup> <a name="agreementIdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementIdInput"></a>

```typescript
public readonly agreementIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceListingPackageAgreementConfig <a name="MarketplaceListingPackageAgreementConfig" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.Initializer"></a>

```typescript
import { marketplaceListingPackageAgreement } from 'rhizo-co-terraform-provider-oci'

const marketplaceListingPackageAgreementConfig: marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.agreementId">agreementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}.

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



