# `opsiEnterpriseManagerBridge` Submodule <a name="`opsiEnterpriseManagerBridge` Submodule" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiEnterpriseManagerBridge <a name="OpsiEnterpriseManagerBridge" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge oci_opsi_enterprise_manager_bridge}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

new opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge(scope: Construct, id: string, config: OpsiEnterpriseManagerBridgeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig">OpsiEnterpriseManagerBridgeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig">OpsiEnterpriseManagerBridgeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsiEnterpriseManagerBridgeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiEnterpriseManagerBridge resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsiEnterpriseManagerBridge resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiEnterpriseManagerBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiEnterpriseManagerBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiEnterpriseManagerBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketStatusDetails">objectStorageBucketStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageNamespaceName">objectStorageNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference">OpsiEnterpriseManagerBridgeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketNameInput">objectStorageBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `objectStorageBucketStatusDetails`<sup>Required</sup> <a name="objectStorageBucketStatusDetails" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketStatusDetails"></a>

```typescript
public readonly objectStorageBucketStatusDetails: string;
```

- *Type:* string

---

##### `objectStorageNamespaceName`<sup>Required</sup> <a name="objectStorageNamespaceName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageNamespaceName"></a>

```typescript
public readonly objectStorageNamespaceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiEnterpriseManagerBridgeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference">OpsiEnterpriseManagerBridgeTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectStorageBucketNameInput`<sup>Optional</sup> <a name="objectStorageBucketNameInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketNameInput"></a>

```typescript
public readonly objectStorageBucketNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsiEnterpriseManagerBridgeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketName"></a>

```typescript
public readonly objectStorageBucketName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiEnterpriseManagerBridgeConfig <a name="OpsiEnterpriseManagerBridgeConfig" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.Initializer"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

const opsiEnterpriseManagerBridgeConfig: opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#compartment_id OpsiEnterpriseManagerBridge#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#display_name OpsiEnterpriseManagerBridge#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#object_storage_bucket_name OpsiEnterpriseManagerBridge#object_storage_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#defined_tags OpsiEnterpriseManagerBridge#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#description OpsiEnterpriseManagerBridge#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#freeform_tags OpsiEnterpriseManagerBridge#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#id OpsiEnterpriseManagerBridge#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#compartment_id OpsiEnterpriseManagerBridge#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#display_name OpsiEnterpriseManagerBridge#display_name}.

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.objectStorageBucketName"></a>

```typescript
public readonly objectStorageBucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#object_storage_bucket_name OpsiEnterpriseManagerBridge#object_storage_bucket_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#defined_tags OpsiEnterpriseManagerBridge#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#description OpsiEnterpriseManagerBridge#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#freeform_tags OpsiEnterpriseManagerBridge#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#id OpsiEnterpriseManagerBridge#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiEnterpriseManagerBridgeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#timeouts OpsiEnterpriseManagerBridge#timeouts}

---

### OpsiEnterpriseManagerBridgeTimeouts <a name="OpsiEnterpriseManagerBridgeTimeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.Initializer"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

const opsiEnterpriseManagerBridgeTimeouts: opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#create OpsiEnterpriseManagerBridge#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#delete OpsiEnterpriseManagerBridge#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#update OpsiEnterpriseManagerBridge#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#create OpsiEnterpriseManagerBridge#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#delete OpsiEnterpriseManagerBridge#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#update OpsiEnterpriseManagerBridge#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiEnterpriseManagerBridgeTimeoutsOutputReference <a name="OpsiEnterpriseManagerBridgeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsiEnterpriseManagerBridge } from 'rhizo-co-terraform-provider-oci'

new opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiEnterpriseManagerBridgeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a>

---



