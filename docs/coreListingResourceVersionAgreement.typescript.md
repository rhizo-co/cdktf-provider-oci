# `coreListingResourceVersionAgreement` Submodule <a name="`coreListingResourceVersionAgreement` Submodule" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreListingResourceVersionAgreement <a name="CoreListingResourceVersionAgreement" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement oci_core_listing_resource_version_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

new coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement(scope: Construct, id: string, config: CoreListingResourceVersionAgreementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig">CoreListingResourceVersionAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig">CoreListingResourceVersionAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreListingResourceVersionAgreementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreListingResourceVersionAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreListingResourceVersionAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreListingResourceVersionAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.eulaLink">eulaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.oracleTermsOfUseLink">oracleTermsOfUseLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference">CoreListingResourceVersionAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeRetrieved">timeRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersionInput">listingResourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eulaLink`<sup>Required</sup> <a name="eulaLink" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.eulaLink"></a>

```typescript
public readonly eulaLink: string;
```

- *Type:* string

---

##### `oracleTermsOfUseLink`<sup>Required</sup> <a name="oracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.oracleTermsOfUseLink"></a>

```typescript
public readonly oracleTermsOfUseLink: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeouts"></a>

```typescript
public readonly timeouts: CoreListingResourceVersionAgreementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference">CoreListingResourceVersionAgreementTimeoutsOutputReference</a>

---

##### `timeRetrieved`<sup>Required</sup> <a name="timeRetrieved" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeRetrieved"></a>

```typescript
public readonly timeRetrieved: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `listingResourceVersionInput`<sup>Optional</sup> <a name="listingResourceVersionInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersionInput"></a>

```typescript
public readonly listingResourceVersionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreListingResourceVersionAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreListingResourceVersionAgreementConfig <a name="CoreListingResourceVersionAgreementConfig" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.Initializer"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

const coreListingResourceVersionAgreementConfig: coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_id CoreListingResourceVersionAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_resource_version CoreListingResourceVersionAgreement#listing_resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#id CoreListingResourceVersionAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_id CoreListingResourceVersionAgreement#listing_id}.

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_resource_version CoreListingResourceVersionAgreement#listing_resource_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#id CoreListingResourceVersionAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreListingResourceVersionAgreementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#timeouts CoreListingResourceVersionAgreement#timeouts}

---

### CoreListingResourceVersionAgreementTimeouts <a name="CoreListingResourceVersionAgreementTimeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.Initializer"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

const coreListingResourceVersionAgreementTimeouts: coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#create CoreListingResourceVersionAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#delete CoreListingResourceVersionAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#update CoreListingResourceVersionAgreement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#create CoreListingResourceVersionAgreement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#delete CoreListingResourceVersionAgreement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#update CoreListingResourceVersionAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreListingResourceVersionAgreementTimeoutsOutputReference <a name="CoreListingResourceVersionAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreListingResourceVersionAgreement } from 'rhizo-co-terraform-provider-oci'

new coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreListingResourceVersionAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a>

---



