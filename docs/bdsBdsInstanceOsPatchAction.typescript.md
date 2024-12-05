# `bdsBdsInstanceOsPatchAction` Submodule <a name="`bdsBdsInstanceOsPatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceOsPatchAction <a name="BdsBdsInstanceOsPatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action oci_bds_bds_instance_os_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

new bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction(scope: Construct, id: string, config: BdsBdsInstanceOsPatchActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig">BdsBdsInstanceOsPatchActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig">BdsBdsInstanceOsPatchActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs">putPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs">resetPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPatchingConfigs` <a name="putPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs"></a>

```typescript
public putPatchingConfigs(value: BdsBdsInstanceOsPatchActionPatchingConfigs): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts"></a>

```typescript
public putTimeouts(value: BdsBdsInstanceOsPatchActionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPatchingConfigs` <a name="resetPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs"></a>

```typescript
public resetPatchingConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BdsBdsInstanceOsPatchAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BdsBdsInstanceOsPatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceOsPatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs">patchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput">clusterAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput">osPatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput">patchingConfigsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion">osPatchVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `patchingConfigs`<sup>Required</sup> <a name="patchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs"></a>

```typescript
public readonly patchingConfigs: BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts"></a>

```typescript
public readonly timeouts: BdsBdsInstanceOsPatchActionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `clusterAdminPasswordInput`<sup>Optional</sup> <a name="clusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput"></a>

```typescript
public readonly clusterAdminPasswordInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `osPatchVersionInput`<sup>Optional</sup> <a name="osPatchVersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput"></a>

```typescript
public readonly osPatchVersionInput: string;
```

- *Type:* string

---

##### `patchingConfigsInput`<sup>Optional</sup> <a name="patchingConfigsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput"></a>

```typescript
public readonly patchingConfigsInput: BdsBdsInstanceOsPatchActionPatchingConfigs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BdsBdsInstanceOsPatchActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion"></a>

```typescript
public readonly osPatchVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceOsPatchActionConfig <a name="BdsBdsInstanceOsPatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.Initializer"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

const bdsBdsInstanceOsPatchActionConfig: bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion">osPatchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs">patchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | patching_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}.

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion"></a>

```typescript
public readonly osPatchVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchingConfigs`<sup>Optional</sup> <a name="patchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs"></a>

```typescript
public readonly patchingConfigs: BdsBdsInstanceOsPatchActionPatchingConfigs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

patching_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BdsBdsInstanceOsPatchActionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}

---

### BdsBdsInstanceOsPatchActionPatchingConfigs <a name="BdsBdsInstanceOsPatchActionPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.Initializer"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

const bdsBdsInstanceOsPatchActionPatchingConfigs: bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy">patchingConfigStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch">toleranceThresholdPerBatch</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain">toleranceThresholdPerDomain</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds">waitTimeBetweenBatchInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds">waitTimeBetweenDomainInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}. |

---

##### `patchingConfigStrategy`<sup>Required</sup> <a name="patchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy"></a>

```typescript
public readonly patchingConfigStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}.

---

##### `toleranceThresholdPerBatch`<sup>Optional</sup> <a name="toleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch"></a>

```typescript
public readonly toleranceThresholdPerBatch: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}.

---

##### `toleranceThresholdPerDomain`<sup>Optional</sup> <a name="toleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain"></a>

```typescript
public readonly toleranceThresholdPerDomain: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}.

---

##### `waitTimeBetweenBatchInSeconds`<sup>Optional</sup> <a name="waitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds"></a>

```typescript
public readonly waitTimeBetweenBatchInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}.

---

##### `waitTimeBetweenDomainInSeconds`<sup>Optional</sup> <a name="waitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds"></a>

```typescript
public readonly waitTimeBetweenDomainInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstanceOsPatchActionTimeouts <a name="BdsBdsInstanceOsPatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.Initializer"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

const bdsBdsInstanceOsPatchActionTimeouts: bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference <a name="BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

new bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch">resetToleranceThresholdPerBatch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain">resetToleranceThresholdPerDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds">resetWaitTimeBetweenBatchInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds">resetWaitTimeBetweenDomainInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetToleranceThresholdPerBatch` <a name="resetToleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch"></a>

```typescript
public resetToleranceThresholdPerBatch(): void
```

##### `resetToleranceThresholdPerDomain` <a name="resetToleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain"></a>

```typescript
public resetToleranceThresholdPerDomain(): void
```

##### `resetWaitTimeBetweenBatchInSeconds` <a name="resetWaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```typescript
public resetWaitTimeBetweenBatchInSeconds(): void
```

##### `resetWaitTimeBetweenDomainInSeconds` <a name="resetWaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```typescript
public resetWaitTimeBetweenDomainInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput">patchingConfigStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput">toleranceThresholdPerBatchInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput">toleranceThresholdPerDomainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput">waitTimeBetweenBatchInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput">waitTimeBetweenDomainInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy">patchingConfigStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch">toleranceThresholdPerBatch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain">toleranceThresholdPerDomain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds">waitTimeBetweenBatchInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds">waitTimeBetweenDomainInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `patchingConfigStrategyInput`<sup>Optional</sup> <a name="patchingConfigStrategyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput"></a>

```typescript
public readonly patchingConfigStrategyInput: string;
```

- *Type:* string

---

##### `toleranceThresholdPerBatchInput`<sup>Optional</sup> <a name="toleranceThresholdPerBatchInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput"></a>

```typescript
public readonly toleranceThresholdPerBatchInput: number;
```

- *Type:* number

---

##### `toleranceThresholdPerDomainInput`<sup>Optional</sup> <a name="toleranceThresholdPerDomainInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput"></a>

```typescript
public readonly toleranceThresholdPerDomainInput: number;
```

- *Type:* number

---

##### `waitTimeBetweenBatchInSecondsInput`<sup>Optional</sup> <a name="waitTimeBetweenBatchInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```typescript
public readonly waitTimeBetweenBatchInSecondsInput: number;
```

- *Type:* number

---

##### `waitTimeBetweenDomainInSecondsInput`<sup>Optional</sup> <a name="waitTimeBetweenDomainInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```typescript
public readonly waitTimeBetweenDomainInSecondsInput: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `patchingConfigStrategy`<sup>Required</sup> <a name="patchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy"></a>

```typescript
public readonly patchingConfigStrategy: string;
```

- *Type:* string

---

##### `toleranceThresholdPerBatch`<sup>Required</sup> <a name="toleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch"></a>

```typescript
public readonly toleranceThresholdPerBatch: number;
```

- *Type:* number

---

##### `toleranceThresholdPerDomain`<sup>Required</sup> <a name="toleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain"></a>

```typescript
public readonly toleranceThresholdPerDomain: number;
```

- *Type:* number

---

##### `waitTimeBetweenBatchInSeconds`<sup>Required</sup> <a name="waitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```typescript
public readonly waitTimeBetweenBatchInSeconds: number;
```

- *Type:* number

---

##### `waitTimeBetweenDomainInSeconds`<sup>Required</sup> <a name="waitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```typescript
public readonly waitTimeBetweenDomainInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BdsBdsInstanceOsPatchActionPatchingConfigs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---


### BdsBdsInstanceOsPatchActionTimeoutsOutputReference <a name="BdsBdsInstanceOsPatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer"></a>

```typescript
import { bdsBdsInstanceOsPatchAction } from 'rhizo-co-terraform-provider-oci'

new bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BdsBdsInstanceOsPatchActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---



