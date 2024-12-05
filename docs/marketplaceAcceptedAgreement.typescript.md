# `marketplaceAcceptedAgreement` Submodule <a name="`marketplaceAcceptedAgreement` Submodule" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceAcceptedAgreement <a name="MarketplaceAcceptedAgreement" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement oci_marketplace_accepted_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

new marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement(scope: Construct, id: string, config: MarketplaceAcceptedAgreementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig">MarketplaceAcceptedAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig">MarketplaceAcceptedAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts"></a>

```typescript
public putTimeouts(value: MarketplaceAcceptedAgreementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MarketplaceAcceptedAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MarketplaceAcceptedAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceAcceptedAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference">MarketplaceAcceptedAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementIdInput">agreementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementId">agreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signature">signature</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeouts"></a>

```typescript
public readonly timeouts: MarketplaceAcceptedAgreementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference">MarketplaceAcceptedAgreementTimeoutsOutputReference</a>

---

##### `agreementIdInput`<sup>Optional</sup> <a name="agreementIdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementIdInput"></a>

```typescript
public readonly agreementIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MarketplaceAcceptedAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceAcceptedAgreementConfig <a name="MarketplaceAcceptedAgreementConfig" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.Initializer"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

const marketplaceAcceptedAgreementConfig: marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.agreementId">agreementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.signature">signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}.

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}.

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MarketplaceAcceptedAgreementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#timeouts MarketplaceAcceptedAgreement#timeouts}

---

### MarketplaceAcceptedAgreementTimeouts <a name="MarketplaceAcceptedAgreementTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.Initializer"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

const marketplaceAcceptedAgreementTimeouts: marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplaceAcceptedAgreementTimeoutsOutputReference <a name="MarketplaceAcceptedAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer"></a>

```typescript
import { marketplaceAcceptedAgreement } from 'rhizo-co-terraform-provider-oci'

new marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MarketplaceAcceptedAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

---



