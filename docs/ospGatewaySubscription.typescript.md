# `ospGatewaySubscription` Submodule <a name="`ospGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewaySubscription <a name="OspGatewaySubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscription(scope: Construct, id: string, config: OspGatewaySubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig">OspGatewaySubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig">OspGatewaySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription">putSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubscription` <a name="putSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription"></a>

```typescript
public putSubscription(value: OspGatewaySubscriptionSubscription): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: OspGatewaySubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

ospGatewaySubscription.OspGatewaySubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

ospGatewaySubscription.OspGatewaySubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

ospGatewaySubscription.OspGatewaySubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OspGatewaySubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId">billToCustAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode">gsiOrgCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType">planType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState">upgradeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput">subscriptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress"></a>

```typescript
public readonly billingAddress: OspGatewaySubscriptionBillingAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a>

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId"></a>

```typescript
public readonly billToCustAccountId: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode"></a>

```typescript
public readonly gsiOrgCode: string;
```

- *Type:* string

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway"></a>

```typescript
public readonly paymentGateway: OspGatewaySubscriptionPaymentGatewayList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: OspGatewaySubscriptionPaymentOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a>

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType"></a>

```typescript
public readonly planType: string;
```

- *Type:* string

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```typescript
public readonly shipToCustAcctRoleId: string;
```

- *Type:* string

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```typescript
public readonly shipToCustAcctSiteId: string;
```

- *Type:* string

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription"></a>

```typescript
public readonly subscription: OspGatewaySubscriptionSubscriptionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a>

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber"></a>

```typescript
public readonly subscriptionPlanNumber: string;
```

- *Type:* string

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo"></a>

```typescript
public readonly taxInfo: OspGatewaySubscriptionTaxInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts"></a>

```typescript
public readonly timeouts: OspGatewaySubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a>

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```typescript
public readonly timePersonalToCorporateConv: string;
```

- *Type:* string

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade"></a>

```typescript
public readonly timePlanUpgrade: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState"></a>

```typescript
public readonly upgradeState: string;
```

- *Type:* string

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails"></a>

```typescript
public readonly upgradeStateDetails: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput"></a>

```typescript
public readonly subscriptionInput: OspGatewaySubscriptionSubscription;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OspGatewaySubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewaySubscriptionBillingAddress <a name="OspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionBillingAddress: ospGatewaySubscription.OspGatewaySubscriptionBillingAddress = { ... }
```


### OspGatewaySubscriptionConfig <a name="OspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionConfig: ospGatewaySubscription.OspGatewaySubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription"></a>

```typescript
public readonly subscription: OspGatewaySubscriptionSubscription;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OspGatewaySubscriptionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

### OspGatewaySubscriptionPaymentGateway <a name="OspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionPaymentGateway: ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway = { ... }
```


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionPaymentGatewayMerchantDefinedData: ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData = { ... }
```


### OspGatewaySubscriptionPaymentOptions <a name="OspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionPaymentOptions: ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions = { ... }
```


### OspGatewaySubscriptionSubscription <a name="OspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionSubscription: ospGatewaySubscription.OspGatewaySubscriptionSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType">accountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress">billingAddress</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]</code> | billing_address block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId">billToCustAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode">currencyCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode">gsiOrgCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay">isIntentToPay</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId">organizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | payment_gateway block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions">paymentOptions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]</code> | payment_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType">planType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | tax_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState">upgradeState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}. |

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber"></a>

```typescript
public readonly subscriptionPlanNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}.

---

##### `accountType`<sup>Optional</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}.

---

##### `billingAddress`<sup>Optional</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress"></a>

```typescript
public readonly billingAddress: IResolvable | OspGatewaySubscriptionSubscriptionBillingAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}

---

##### `billToCustAccountId`<sup>Optional</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId"></a>

```typescript
public readonly billToCustAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}.

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}.

---

##### `gsiOrgCode`<sup>Optional</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode"></a>

```typescript
public readonly gsiOrgCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIntentToPay`<sup>Optional</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}.

---

##### `paymentGateway`<sup>Optional</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway"></a>

```typescript
public readonly paymentGateway: OspGatewaySubscriptionSubscriptionPaymentGateway;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

payment_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}

---

##### `paymentOptions`<sup>Optional</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: IResolvable | OspGatewaySubscriptionSubscriptionPaymentOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]

payment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}

---

##### `planType`<sup>Optional</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType"></a>

```typescript
public readonly planType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}.

---

##### `shipToCustAcctRoleId`<sup>Optional</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId"></a>

```typescript
public readonly shipToCustAcctRoleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}.

---

##### `shipToCustAcctSiteId`<sup>Optional</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId"></a>

```typescript
public readonly shipToCustAcctSiteId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}.

---

##### `taxInfo`<sup>Optional</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo"></a>

```typescript
public readonly taxInfo: OspGatewaySubscriptionSubscriptionTaxInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

tax_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}

---

##### `timePersonalToCorporateConv`<sup>Optional</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv"></a>

```typescript
public readonly timePersonalToCorporateConv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}.

---

##### `timePlanUpgrade`<sup>Optional</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade"></a>

```typescript
public readonly timePlanUpgrade: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}.

---

##### `upgradeState`<sup>Optional</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState"></a>

```typescript
public readonly upgradeState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}.

---

##### `upgradeStateDetails`<sup>Optional</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails"></a>

```typescript
public readonly upgradeStateDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}.

---

### OspGatewaySubscriptionSubscriptionBillingAddress <a name="OspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionSubscriptionBillingAddress: ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey">addressKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName">companyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass">contributorClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county">county</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName">departmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber">internalNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle">jobTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1">line1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2">line2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3">line3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4">line4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName">middleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province">province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription">stateInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName">streetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber">streetNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}. |

---

##### `addressKey`<sup>Optional</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}.

---

##### `contributorClass`<sup>Optional</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}.

---

##### `departmentName`<sup>Optional</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `internalNumber`<sup>Optional</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}.

---

##### `municipalInscription`<sup>Optional</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}.

---

##### `phoneCountryCode`<sup>Optional</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}.

---

##### `stateInscription`<sup>Optional</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}.

---

##### `streetName`<sup>Optional</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}.

---

##### `streetNumber`<sup>Optional</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}.

---

### OspGatewaySubscriptionSubscriptionPaymentGateway <a name="OspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionSubscriptionPaymentGateway: ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | merchant_defined_data block. |

---

##### `merchantDefinedData`<sup>Optional</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData"></a>

```typescript
public readonly merchantDefinedData: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

merchant_defined_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}

---

### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData: ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType">promoType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}. |

---

##### `cloudAccountName`<sup>Optional</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}.

---

##### `promoType`<sup>Optional</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}.

---

### OspGatewaySubscriptionSubscriptionPaymentOptions <a name="OspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionSubscriptionPaymentOptions: ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType">creditCardType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits">lastDigits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId">walletInstrumentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId">walletTransactionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}. |

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}.

---

##### `creditCardType`<sup>Optional</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `extBillingAgreementId`<sup>Optional</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId"></a>

```typescript
public readonly extBillingAgreementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `lastDigits`<sup>Optional</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `nameOnCard`<sup>Optional</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}.

---

##### `timeExpiration`<sup>Optional</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}.

---

##### `walletInstrumentId`<sup>Optional</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId"></a>

```typescript
public readonly walletInstrumentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}.

---

##### `walletTransactionId`<sup>Optional</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId"></a>

```typescript
public readonly walletTransactionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}.

---

### OspGatewaySubscriptionSubscriptionTaxInfo <a name="OspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionSubscriptionTaxInfo: ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj">taxCnpj</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId">taxPayerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber">taxRegNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}. |

---

##### `noTaxReasonCode`<sup>Optional</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode"></a>

```typescript
public readonly noTaxReasonCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}.

---

##### `noTaxReasonCodeDetails`<sup>Optional</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails"></a>

```typescript
public readonly noTaxReasonCodeDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}.

---

##### `taxCnpj`<sup>Optional</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj"></a>

```typescript
public readonly taxCnpj: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}.

---

##### `taxPayerId`<sup>Optional</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId"></a>

```typescript
public readonly taxPayerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}.

---

##### `taxRegNumber`<sup>Optional</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber"></a>

```typescript
public readonly taxRegNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}.

---

### OspGatewaySubscriptionTaxInfo <a name="OspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionTaxInfo: ospGatewaySubscription.OspGatewaySubscriptionTaxInfo = { ... }
```


### OspGatewaySubscriptionTimeouts <a name="OspGatewaySubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

const ospGatewaySubscriptionTimeouts: ospGatewaySubscription.OspGatewaySubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewaySubscriptionBillingAddressList <a name="OspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OspGatewaySubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionBillingAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionPaymentGatewayList <a name="OspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionPaymentGatewayMerchantDefinedData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```typescript
public readonly merchantDefinedData: OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionPaymentGateway;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OspGatewaySubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```typescript
public readonly extBillingAgreementId: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```typescript
public readonly walletInstrumentId: string;
```

- *Type:* string

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```typescript
public readonly walletTransactionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionPaymentOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionBillingAddressList <a name="OspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OspGatewaySubscriptionSubscriptionBillingAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]

---


### OspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey">resetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass">resetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName">resetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber">resetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1">resetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2">resetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3">resetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4">resetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription">resetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode">resetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription">resetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName">resetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber">resetStreetNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressKey` <a name="resetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey"></a>

```typescript
public resetAddressKey(): void
```

##### `resetCity` <a name="resetCity" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCompanyName` <a name="resetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName"></a>

```typescript
public resetCompanyName(): void
```

##### `resetContributorClass` <a name="resetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass"></a>

```typescript
public resetContributorClass(): void
```

##### `resetCountry` <a name="resetCountry" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetDepartmentName` <a name="resetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName"></a>

```typescript
public resetDepartmentName(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetInternalNumber` <a name="resetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber"></a>

```typescript
public resetInternalNumber(): void
```

##### `resetJobTitle` <a name="resetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle"></a>

```typescript
public resetJobTitle(): void
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetLine1` <a name="resetLine1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1"></a>

```typescript
public resetLine1(): void
```

##### `resetLine2` <a name="resetLine2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2"></a>

```typescript
public resetLine2(): void
```

##### `resetLine3` <a name="resetLine3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3"></a>

```typescript
public resetLine3(): void
```

##### `resetLine4` <a name="resetLine4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4"></a>

```typescript
public resetLine4(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```

##### `resetMunicipalInscription` <a name="resetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription"></a>

```typescript
public resetMunicipalInscription(): void
```

##### `resetPhoneCountryCode` <a name="resetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode"></a>

```typescript
public resetPhoneCountryCode(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStateInscription` <a name="resetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription"></a>

```typescript
public resetStateInscription(): void
```

##### `resetStreetName` <a name="resetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName"></a>

```typescript
public resetStreetName(): void
```

##### `resetStreetNumber` <a name="resetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber"></a>

```typescript
public resetStreetNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput">addressKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput">contributorClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput">departmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput">internalNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput">jobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input">line1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input">line2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input">line3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input">line4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput">municipalInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput">phoneCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput">stateInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput">streetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput">streetNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressKeyInput`<sup>Optional</sup> <a name="addressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput"></a>

```typescript
public readonly addressKeyInput: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `contributorClassInput`<sup>Optional</sup> <a name="contributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput"></a>

```typescript
public readonly contributorClassInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `departmentNameInput`<sup>Optional</sup> <a name="departmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput"></a>

```typescript
public readonly departmentNameInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `internalNumberInput`<sup>Optional</sup> <a name="internalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput"></a>

```typescript
public readonly internalNumberInput: string;
```

- *Type:* string

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `line1Input`<sup>Optional</sup> <a name="line1Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input"></a>

```typescript
public readonly line1Input: string;
```

- *Type:* string

---

##### `line2Input`<sup>Optional</sup> <a name="line2Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input"></a>

```typescript
public readonly line2Input: string;
```

- *Type:* string

---

##### `line3Input`<sup>Optional</sup> <a name="line3Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input"></a>

```typescript
public readonly line3Input: string;
```

- *Type:* string

---

##### `line4Input`<sup>Optional</sup> <a name="line4Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input"></a>

```typescript
public readonly line4Input: string;
```

- *Type:* string

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `municipalInscriptionInput`<sup>Optional</sup> <a name="municipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput"></a>

```typescript
public readonly municipalInscriptionInput: string;
```

- *Type:* string

---

##### `phoneCountryCodeInput`<sup>Optional</sup> <a name="phoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput"></a>

```typescript
public readonly phoneCountryCodeInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `stateInscriptionInput`<sup>Optional</sup> <a name="stateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput"></a>

```typescript
public readonly stateInscriptionInput: string;
```

- *Type:* string

---

##### `streetNameInput`<sup>Optional</sup> <a name="streetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput"></a>

```typescript
public readonly streetNameInput: string;
```

- *Type:* string

---

##### `streetNumberInput`<sup>Optional</sup> <a name="streetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput"></a>

```typescript
public readonly streetNumberInput: string;
```

- *Type:* string

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OspGatewaySubscriptionSubscriptionBillingAddress;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionSubscriptionOutputReference <a name="OspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress">putBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway">putPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions">putPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo">putTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType">resetAccountType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress">resetBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId">resetBillToCustAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode">resetGsiOrgCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay">resetIsIntentToPay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway">resetPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions">resetPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType">resetPlanType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId">resetShipToCustAcctRoleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId">resetShipToCustAcctSiteId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo">resetTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv">resetTimePersonalToCorporateConv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade">resetTimePlanUpgrade</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart">resetTimeStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState">resetUpgradeState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails">resetUpgradeStateDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBillingAddress` <a name="putBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress"></a>

```typescript
public putBillingAddress(value: IResolvable | OspGatewaySubscriptionSubscriptionBillingAddress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]

---

##### `putPaymentGateway` <a name="putPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway"></a>

```typescript
public putPaymentGateway(value: OspGatewaySubscriptionSubscriptionPaymentGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `putPaymentOptions` <a name="putPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions"></a>

```typescript
public putPaymentOptions(value: IResolvable | OspGatewaySubscriptionSubscriptionPaymentOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]

---

##### `putTaxInfo` <a name="putTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo"></a>

```typescript
public putTaxInfo(value: OspGatewaySubscriptionSubscriptionTaxInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `resetAccountType` <a name="resetAccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType"></a>

```typescript
public resetAccountType(): void
```

##### `resetBillingAddress` <a name="resetBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress"></a>

```typescript
public resetBillingAddress(): void
```

##### `resetBillToCustAccountId` <a name="resetBillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId"></a>

```typescript
public resetBillToCustAccountId(): void
```

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode"></a>

```typescript
public resetCurrencyCode(): void
```

##### `resetGsiOrgCode` <a name="resetGsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode"></a>

```typescript
public resetGsiOrgCode(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsIntentToPay` <a name="resetIsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay"></a>

```typescript
public resetIsIntentToPay(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

##### `resetPaymentGateway` <a name="resetPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway"></a>

```typescript
public resetPaymentGateway(): void
```

##### `resetPaymentOptions` <a name="resetPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions"></a>

```typescript
public resetPaymentOptions(): void
```

##### `resetPlanType` <a name="resetPlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType"></a>

```typescript
public resetPlanType(): void
```

##### `resetShipToCustAcctRoleId` <a name="resetShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId"></a>

```typescript
public resetShipToCustAcctRoleId(): void
```

##### `resetShipToCustAcctSiteId` <a name="resetShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId"></a>

```typescript
public resetShipToCustAcctSiteId(): void
```

##### `resetTaxInfo` <a name="resetTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo"></a>

```typescript
public resetTaxInfo(): void
```

##### `resetTimePersonalToCorporateConv` <a name="resetTimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv"></a>

```typescript
public resetTimePersonalToCorporateConv(): void
```

##### `resetTimePlanUpgrade` <a name="resetTimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade"></a>

```typescript
public resetTimePlanUpgrade(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

##### `resetUpgradeState` <a name="resetUpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState"></a>

```typescript
public resetUpgradeState(): void
```

##### `resetUpgradeStateDetails` <a name="resetUpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails"></a>

```typescript
public resetUpgradeStateDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput">accountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput">billingAddressInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput">billToCustAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput">gsiOrgCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput">isIntentToPayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput">paymentGatewayInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput">paymentOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput">planTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput">shipToCustAcctRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput">shipToCustAcctSiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput">subscriptionPlanNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput">taxInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput">timePersonalToCorporateConvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput">timePlanUpgradeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput">upgradeStateDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput">upgradeStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">billToCustAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">gsiOrgCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType">planType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">upgradeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```typescript
public readonly billingAddress: OspGatewaySubscriptionSubscriptionBillingAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```typescript
public readonly paymentGateway: OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: OspGatewaySubscriptionSubscriptionPaymentOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```typescript
public readonly taxInfo: OspGatewaySubscriptionSubscriptionTaxInfoOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a>

---

##### `accountTypeInput`<sup>Optional</sup> <a name="accountTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput"></a>

```typescript
public readonly accountTypeInput: string;
```

- *Type:* string

---

##### `billingAddressInput`<sup>Optional</sup> <a name="billingAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput"></a>

```typescript
public readonly billingAddressInput: IResolvable | OspGatewaySubscriptionSubscriptionBillingAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>[]

---

##### `billToCustAccountIdInput`<sup>Optional</sup> <a name="billToCustAccountIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput"></a>

```typescript
public readonly billToCustAccountIdInput: string;
```

- *Type:* string

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput"></a>

```typescript
public readonly currencyCodeInput: string;
```

- *Type:* string

---

##### `gsiOrgCodeInput`<sup>Optional</sup> <a name="gsiOrgCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput"></a>

```typescript
public readonly gsiOrgCodeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isIntentToPayInput`<sup>Optional</sup> <a name="isIntentToPayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput"></a>

```typescript
public readonly isIntentToPayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `paymentGatewayInput`<sup>Optional</sup> <a name="paymentGatewayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput"></a>

```typescript
public readonly paymentGatewayInput: OspGatewaySubscriptionSubscriptionPaymentGateway;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `paymentOptionsInput`<sup>Optional</sup> <a name="paymentOptionsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput"></a>

```typescript
public readonly paymentOptionsInput: IResolvable | OspGatewaySubscriptionSubscriptionPaymentOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]

---

##### `planTypeInput`<sup>Optional</sup> <a name="planTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput"></a>

```typescript
public readonly planTypeInput: string;
```

- *Type:* string

---

##### `shipToCustAcctRoleIdInput`<sup>Optional</sup> <a name="shipToCustAcctRoleIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput"></a>

```typescript
public readonly shipToCustAcctRoleIdInput: string;
```

- *Type:* string

---

##### `shipToCustAcctSiteIdInput`<sup>Optional</sup> <a name="shipToCustAcctSiteIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput"></a>

```typescript
public readonly shipToCustAcctSiteIdInput: string;
```

- *Type:* string

---

##### `subscriptionPlanNumberInput`<sup>Optional</sup> <a name="subscriptionPlanNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput"></a>

```typescript
public readonly subscriptionPlanNumberInput: string;
```

- *Type:* string

---

##### `taxInfoInput`<sup>Optional</sup> <a name="taxInfoInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput"></a>

```typescript
public readonly taxInfoInput: OspGatewaySubscriptionSubscriptionTaxInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `timePersonalToCorporateConvInput`<sup>Optional</sup> <a name="timePersonalToCorporateConvInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput"></a>

```typescript
public readonly timePersonalToCorporateConvInput: string;
```

- *Type:* string

---

##### `timePlanUpgradeInput`<sup>Optional</sup> <a name="timePlanUpgradeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput"></a>

```typescript
public readonly timePlanUpgradeInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `upgradeStateDetailsInput`<sup>Optional</sup> <a name="upgradeStateDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput"></a>

```typescript
public readonly upgradeStateDetailsInput: string;
```

- *Type:* string

---

##### `upgradeStateInput`<sup>Optional</sup> <a name="upgradeStateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput"></a>

```typescript
public readonly upgradeStateInput: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```typescript
public readonly billToCustAccountId: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```typescript
public readonly gsiOrgCode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```typescript
public readonly planType: string;
```

- *Type:* string

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```typescript
public readonly shipToCustAcctRoleId: string;
```

- *Type:* string

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```typescript
public readonly shipToCustAcctSiteId: string;
```

- *Type:* string

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```typescript
public readonly subscriptionPlanNumber: string;
```

- *Type:* string

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```typescript
public readonly timePersonalToCorporateConv: string;
```

- *Type:* string

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```typescript
public readonly timePlanUpgrade: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```typescript
public readonly upgradeState: string;
```

- *Type:* string

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```typescript
public readonly upgradeStateDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionSubscription;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName">resetCloudAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType">resetPromoType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudAccountName` <a name="resetCloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName"></a>

```typescript
public resetCloudAccountName(): void
```

##### `resetPromoType` <a name="resetPromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType"></a>

```typescript
public resetPromoType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput">cloudAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput">promoTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudAccountNameInput`<sup>Optional</sup> <a name="cloudAccountNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput"></a>

```typescript
public readonly cloudAccountNameInput: string;
```

- *Type:* string

---

##### `promoTypeInput`<sup>Optional</sup> <a name="promoTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput"></a>

```typescript
public readonly promoTypeInput: string;
```

- *Type:* string

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData">putMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData">resetMerchantDefinedData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMerchantDefinedData` <a name="putMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData"></a>

```typescript
public putMerchantDefinedData(value: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `resetMerchantDefinedData` <a name="resetMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData"></a>

```typescript
public resetMerchantDefinedData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput">merchantDefinedDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```typescript
public readonly merchantDefinedData: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a>

---

##### `merchantDefinedDataInput`<sup>Optional</sup> <a name="merchantDefinedDataInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput"></a>

```typescript
public readonly merchantDefinedDataInput: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionSubscriptionPaymentGateway;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OspGatewaySubscriptionSubscriptionPaymentOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>[]

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType">resetCreditCardType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId">resetExtBillingAgreementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits">resetLastDigits</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard">resetNameOnCard</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration">resetTimeExpiration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId">resetWalletInstrumentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId">resetWalletTransactionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreditCardType` <a name="resetCreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType"></a>

```typescript
public resetCreditCardType(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetExtBillingAgreementId` <a name="resetExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId"></a>

```typescript
public resetExtBillingAgreementId(): void
```

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastDigits` <a name="resetLastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits"></a>

```typescript
public resetLastDigits(): void
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetNameOnCard` <a name="resetNameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard"></a>

```typescript
public resetNameOnCard(): void
```

##### `resetTimeExpiration` <a name="resetTimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration"></a>

```typescript
public resetTimeExpiration(): void
```

##### `resetWalletInstrumentId` <a name="resetWalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId"></a>

```typescript
public resetWalletInstrumentId(): void
```

##### `resetWalletTransactionId` <a name="resetWalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId"></a>

```typescript
public resetWalletTransactionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput">creditCardTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput">extBillingAgreementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput">lastDigitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput">nameOnCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput">paymentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput">timeExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput">walletInstrumentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput">walletTransactionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creditCardTypeInput`<sup>Optional</sup> <a name="creditCardTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput"></a>

```typescript
public readonly creditCardTypeInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `extBillingAgreementIdInput`<sup>Optional</sup> <a name="extBillingAgreementIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput"></a>

```typescript
public readonly extBillingAgreementIdInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastDigitsInput`<sup>Optional</sup> <a name="lastDigitsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput"></a>

```typescript
public readonly lastDigitsInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `nameOnCardInput`<sup>Optional</sup> <a name="nameOnCardInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput"></a>

```typescript
public readonly nameOnCardInput: string;
```

- *Type:* string

---

##### `paymentMethodInput`<sup>Optional</sup> <a name="paymentMethodInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput"></a>

```typescript
public readonly paymentMethodInput: string;
```

- *Type:* string

---

##### `timeExpirationInput`<sup>Optional</sup> <a name="timeExpirationInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput"></a>

```typescript
public readonly timeExpirationInput: string;
```

- *Type:* string

---

##### `walletInstrumentIdInput`<sup>Optional</sup> <a name="walletInstrumentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput"></a>

```typescript
public readonly walletInstrumentIdInput: string;
```

- *Type:* string

---

##### `walletTransactionIdInput`<sup>Optional</sup> <a name="walletTransactionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput"></a>

```typescript
public readonly walletTransactionIdInput: string;
```

- *Type:* string

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```typescript
public readonly extBillingAgreementId: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```typescript
public readonly walletInstrumentId: string;
```

- *Type:* string

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```typescript
public readonly walletTransactionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OspGatewaySubscriptionSubscriptionPaymentOptions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode">resetNoTaxReasonCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails">resetNoTaxReasonCodeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj">resetTaxCnpj</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId">resetTaxPayerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber">resetTaxRegNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoTaxReasonCode` <a name="resetNoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode"></a>

```typescript
public resetNoTaxReasonCode(): void
```

##### `resetNoTaxReasonCodeDetails` <a name="resetNoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails"></a>

```typescript
public resetNoTaxReasonCodeDetails(): void
```

##### `resetTaxCnpj` <a name="resetTaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj"></a>

```typescript
public resetTaxCnpj(): void
```

##### `resetTaxPayerId` <a name="resetTaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId"></a>

```typescript
public resetTaxPayerId(): void
```

##### `resetTaxRegNumber` <a name="resetTaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber"></a>

```typescript
public resetTaxRegNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput">noTaxReasonCodeDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput">noTaxReasonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput">taxCnpjInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput">taxPayerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput">taxRegNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noTaxReasonCodeDetailsInput`<sup>Optional</sup> <a name="noTaxReasonCodeDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput"></a>

```typescript
public readonly noTaxReasonCodeDetailsInput: string;
```

- *Type:* string

---

##### `noTaxReasonCodeInput`<sup>Optional</sup> <a name="noTaxReasonCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput"></a>

```typescript
public readonly noTaxReasonCodeInput: string;
```

- *Type:* string

---

##### `taxCnpjInput`<sup>Optional</sup> <a name="taxCnpjInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput"></a>

```typescript
public readonly taxCnpjInput: string;
```

- *Type:* string

---

##### `taxPayerIdInput`<sup>Optional</sup> <a name="taxPayerIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput"></a>

```typescript
public readonly taxPayerIdInput: string;
```

- *Type:* string

---

##### `taxRegNumberInput`<sup>Optional</sup> <a name="taxRegNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput"></a>

```typescript
public readonly taxRegNumberInput: string;
```

- *Type:* string

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```typescript
public readonly noTaxReasonCode: string;
```

- *Type:* string

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```typescript
public readonly noTaxReasonCodeDetails: string;
```

- *Type:* string

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```typescript
public readonly taxCnpj: string;
```

- *Type:* string

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```typescript
public readonly taxPayerId: string;
```

- *Type:* string

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```typescript
public readonly taxRegNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionSubscriptionTaxInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTaxInfoList <a name="OspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get"></a>

```typescript
public get(index: number): OspGatewaySubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OspGatewaySubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro">giro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```typescript
public readonly giro: string;
```

- *Type:* string

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```typescript
public readonly noTaxReasonCode: string;
```

- *Type:* string

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```typescript
public readonly noTaxReasonCodeDetails: string;
```

- *Type:* string

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```typescript
public readonly taxCnpj: string;
```

- *Type:* string

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```typescript
public readonly taxPayerId: string;
```

- *Type:* string

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```typescript
public readonly taxRegNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewaySubscriptionTaxInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTimeoutsOutputReference <a name="OspGatewaySubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { ospGatewaySubscription } from 'rhizo-co-terraform-provider-oci'

new ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OspGatewaySubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---



