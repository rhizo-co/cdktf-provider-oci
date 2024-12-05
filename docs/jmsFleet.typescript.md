# `jmsFleet` Submodule <a name="`jmsFleet` Submodule" id="rhizo-co-terraform-provider-oci.jmsFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsFleet <a name="JmsFleet" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet oci_jms_fleet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

new jmsFleet.JmsFleet(scope: Construct, id: string, config: JmsFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig">JmsFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig">JmsFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putInventoryLog">putInventoryLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putOperationLog">putOperationLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetIsAdvancedFeaturesEnabled">resetIsAdvancedFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetOperationLog">resetOperationLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInventoryLog` <a name="putInventoryLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putInventoryLog"></a>

```typescript
public putInventoryLog(value: JmsFleetInventoryLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putInventoryLog.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a>

---

##### `putOperationLog` <a name="putOperationLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putOperationLog"></a>

```typescript
public putOperationLog(value: JmsFleetOperationLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putOperationLog.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putTimeouts"></a>

```typescript
public putTimeouts(value: JmsFleetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAdvancedFeaturesEnabled` <a name="resetIsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetIsAdvancedFeaturesEnabled"></a>

```typescript
public resetIsAdvancedFeaturesEnabled(): void
```

##### `resetOperationLog` <a name="resetOperationLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetOperationLog"></a>

```typescript
public resetOperationLog(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JmsFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isConstruct"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

jmsFleet.JmsFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isTerraformElement"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

jmsFleet.JmsFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isTerraformResource"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

jmsFleet.JmsFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.generateConfigForImport"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

jmsFleet.JmsFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a JmsFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateApplicationCount">approximateApplicationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateInstallationCount">approximateInstallationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateJavaServerCount">approximateJavaServerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateJreCount">approximateJreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateManagedInstanceCount">approximateManagedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.inventoryLog">inventoryLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference">JmsFleetInventoryLogOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.isExportSettingEnabled">isExportSettingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.operationLog">operationLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference">JmsFleetOperationLogOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference">JmsFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.inventoryLogInput">inventoryLogInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.isAdvancedFeaturesEnabledInput">isAdvancedFeaturesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.operationLogInput">operationLogInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approximateApplicationCount`<sup>Required</sup> <a name="approximateApplicationCount" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateApplicationCount"></a>

```typescript
public readonly approximateApplicationCount: number;
```

- *Type:* number

---

##### `approximateInstallationCount`<sup>Required</sup> <a name="approximateInstallationCount" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateInstallationCount"></a>

```typescript
public readonly approximateInstallationCount: number;
```

- *Type:* number

---

##### `approximateJavaServerCount`<sup>Required</sup> <a name="approximateJavaServerCount" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateJavaServerCount"></a>

```typescript
public readonly approximateJavaServerCount: number;
```

- *Type:* number

---

##### `approximateJreCount`<sup>Required</sup> <a name="approximateJreCount" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateJreCount"></a>

```typescript
public readonly approximateJreCount: number;
```

- *Type:* number

---

##### `approximateManagedInstanceCount`<sup>Required</sup> <a name="approximateManagedInstanceCount" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.approximateManagedInstanceCount"></a>

```typescript
public readonly approximateManagedInstanceCount: number;
```

- *Type:* number

---

##### `inventoryLog`<sup>Required</sup> <a name="inventoryLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.inventoryLog"></a>

```typescript
public readonly inventoryLog: JmsFleetInventoryLogOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference">JmsFleetInventoryLogOutputReference</a>

---

##### `isExportSettingEnabled`<sup>Required</sup> <a name="isExportSettingEnabled" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.isExportSettingEnabled"></a>

```typescript
public readonly isExportSettingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `operationLog`<sup>Required</sup> <a name="operationLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.operationLog"></a>

```typescript
public readonly operationLog: JmsFleetOperationLogOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference">JmsFleetOperationLogOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.timeouts"></a>

```typescript
public readonly timeouts: JmsFleetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference">JmsFleetTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inventoryLogInput`<sup>Optional</sup> <a name="inventoryLogInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.inventoryLogInput"></a>

```typescript
public readonly inventoryLogInput: JmsFleetInventoryLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a>

---

##### `isAdvancedFeaturesEnabledInput`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.isAdvancedFeaturesEnabledInput"></a>

```typescript
public readonly isAdvancedFeaturesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationLogInput`<sup>Optional</sup> <a name="operationLogInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.operationLogInput"></a>

```typescript
public readonly operationLogInput: JmsFleetOperationLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | JmsFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAdvancedFeaturesEnabled`<sup>Required</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.isAdvancedFeaturesEnabled"></a>

```typescript
public readonly isAdvancedFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsFleetConfig <a name="JmsFleetConfig" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

const jmsFleetConfig: jmsFleet.JmsFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#compartment_id JmsFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#display_name JmsFleet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.inventoryLog">inventoryLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a></code> | inventory_log block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#defined_tags JmsFleet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#description JmsFleet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#freeform_tags JmsFleet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#id JmsFleet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#is_advanced_features_enabled JmsFleet#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.operationLog">operationLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a></code> | operation_log block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#compartment_id JmsFleet#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#display_name JmsFleet#display_name}.

---

##### `inventoryLog`<sup>Required</sup> <a name="inventoryLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.inventoryLog"></a>

```typescript
public readonly inventoryLog: JmsFleetInventoryLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a>

inventory_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#inventory_log JmsFleet#inventory_log}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#defined_tags JmsFleet#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#description JmsFleet#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#freeform_tags JmsFleet#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#id JmsFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAdvancedFeaturesEnabled`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.isAdvancedFeaturesEnabled"></a>

```typescript
public readonly isAdvancedFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#is_advanced_features_enabled JmsFleet#is_advanced_features_enabled}.

---

##### `operationLog`<sup>Optional</sup> <a name="operationLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.operationLog"></a>

```typescript
public readonly operationLog: JmsFleetOperationLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a>

operation_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#operation_log JmsFleet#operation_log}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: JmsFleetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#timeouts JmsFleet#timeouts}

---

### JmsFleetInventoryLog <a name="JmsFleetInventoryLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

const jmsFleetInventoryLog: jmsFleet.JmsFleetInventoryLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_group_id JmsFleet#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_id JmsFleet#log_id}. |

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_group_id JmsFleet#log_group_id}.

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_id JmsFleet#log_id}.

---

### JmsFleetOperationLog <a name="JmsFleetOperationLog" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

const jmsFleetOperationLog: jmsFleet.JmsFleetOperationLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_group_id JmsFleet#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_id JmsFleet#log_id}. |

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_group_id JmsFleet#log_group_id}.

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#log_id JmsFleet#log_id}.

---

### JmsFleetTimeouts <a name="JmsFleetTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

const jmsFleetTimeouts: jmsFleet.JmsFleetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#create JmsFleet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#delete JmsFleet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#update JmsFleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#create JmsFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#delete JmsFleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet#update JmsFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsFleetInventoryLogOutputReference <a name="JmsFleetInventoryLogOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

new jmsFleet.JmsFleetInventoryLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetInventoryLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetInventoryLog">JmsFleetInventoryLog</a>

---


### JmsFleetOperationLogOutputReference <a name="JmsFleetOperationLogOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

new jmsFleet.JmsFleetOperationLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetOperationLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetOperationLog">JmsFleetOperationLog</a>

---


### JmsFleetTimeoutsOutputReference <a name="JmsFleetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.Initializer"></a>

```typescript
import { jmsFleet } from 'rhizo-co-terraform-provider-oci'

new jmsFleet.JmsFleetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleet.JmsFleetTimeouts">JmsFleetTimeouts</a>

---



