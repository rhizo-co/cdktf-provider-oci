# `coreAppCatalogSubscription` Submodule <a name="`coreAppCatalogSubscription` Submodule" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreAppCatalogSubscription <a name="CoreAppCatalogSubscription" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription oci_core_app_catalog_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

new coreAppCatalogSubscription.CoreAppCatalogSubscription(scope: Construct, id: string, config: CoreAppCatalogSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig">CoreAppCatalogSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig">CoreAppCatalogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetEulaLink">resetEulaLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreAppCatalogSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a>

---

##### `resetEulaLink` <a name="resetEulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetEulaLink"></a>

```typescript
public resetEulaLink(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreAppCatalogSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreAppCatalogSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreAppCatalogSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreAppCatalogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreAppCatalogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceId">listingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.publisherName">publisherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference">CoreAppCatalogSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLinkInput">eulaLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersionInput">listingResourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLinkInput">oracleTermsOfUseLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrievedInput">timeRetrievedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLink">eulaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLink">oracleTermsOfUseLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrieved">timeRetrieved</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `listingResourceId`<sup>Required</sup> <a name="listingResourceId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceId"></a>

```typescript
public readonly listingResourceId: string;
```

- *Type:* string

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.publisherName"></a>

```typescript
public readonly publisherName: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: CoreAppCatalogSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference">CoreAppCatalogSubscriptionTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `eulaLinkInput`<sup>Optional</sup> <a name="eulaLinkInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLinkInput"></a>

```typescript
public readonly eulaLinkInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `listingResourceVersionInput`<sup>Optional</sup> <a name="listingResourceVersionInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersionInput"></a>

```typescript
public readonly listingResourceVersionInput: string;
```

- *Type:* string

---

##### `oracleTermsOfUseLinkInput`<sup>Optional</sup> <a name="oracleTermsOfUseLinkInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLinkInput"></a>

```typescript
public readonly oracleTermsOfUseLinkInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreAppCatalogSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a>

---

##### `timeRetrievedInput`<sup>Optional</sup> <a name="timeRetrievedInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrievedInput"></a>

```typescript
public readonly timeRetrievedInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `eulaLink`<sup>Required</sup> <a name="eulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLink"></a>

```typescript
public readonly eulaLink: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

---

##### `oracleTermsOfUseLink`<sup>Required</sup> <a name="oracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLink"></a>

```typescript
public readonly oracleTermsOfUseLink: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `timeRetrieved`<sup>Required</sup> <a name="timeRetrieved" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrieved"></a>

```typescript
public readonly timeRetrieved: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreAppCatalogSubscriptionConfig <a name="CoreAppCatalogSubscriptionConfig" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.Initializer"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

const coreAppCatalogSubscriptionConfig: coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#compartment_id CoreAppCatalogSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_id CoreAppCatalogSubscription#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_resource_version CoreAppCatalogSubscription#listing_resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.oracleTermsOfUseLink">oracleTermsOfUseLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#oracle_terms_of_use_link CoreAppCatalogSubscription#oracle_terms_of_use_link}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.signature">signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#signature CoreAppCatalogSubscription#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeRetrieved">timeRetrieved</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#time_retrieved CoreAppCatalogSubscription#time_retrieved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.eulaLink">eulaLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#eula_link CoreAppCatalogSubscription#eula_link}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#id CoreAppCatalogSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#compartment_id CoreAppCatalogSubscription#compartment_id}.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_id CoreAppCatalogSubscription#listing_id}.

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_resource_version CoreAppCatalogSubscription#listing_resource_version}.

---

##### `oracleTermsOfUseLink`<sup>Required</sup> <a name="oracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.oracleTermsOfUseLink"></a>

```typescript
public readonly oracleTermsOfUseLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#oracle_terms_of_use_link CoreAppCatalogSubscription#oracle_terms_of_use_link}.

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#signature CoreAppCatalogSubscription#signature}.

---

##### `timeRetrieved`<sup>Required</sup> <a name="timeRetrieved" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeRetrieved"></a>

```typescript
public readonly timeRetrieved: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#time_retrieved CoreAppCatalogSubscription#time_retrieved}.

---

##### `eulaLink`<sup>Optional</sup> <a name="eulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.eulaLink"></a>

```typescript
public readonly eulaLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#eula_link CoreAppCatalogSubscription#eula_link}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#id CoreAppCatalogSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreAppCatalogSubscriptionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#timeouts CoreAppCatalogSubscription#timeouts}

---

### CoreAppCatalogSubscriptionTimeouts <a name="CoreAppCatalogSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.Initializer"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

const coreAppCatalogSubscriptionTimeouts: coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#create CoreAppCatalogSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#delete CoreAppCatalogSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#update CoreAppCatalogSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#create CoreAppCatalogSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#delete CoreAppCatalogSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#update CoreAppCatalogSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreAppCatalogSubscriptionTimeoutsOutputReference <a name="CoreAppCatalogSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreAppCatalogSubscription } from 'rhizo-co-terraform-provider-oci'

new coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreAppCatalogSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a>

---



