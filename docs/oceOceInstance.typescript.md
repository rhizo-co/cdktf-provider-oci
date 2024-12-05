# `oceOceInstance` Submodule <a name="`oceOceInstance` Submodule" id="rhizo-co-terraform-provider-oci.oceOceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceOceInstance <a name="OceOceInstance" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance oci_oce_oce_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

new oceOceInstance.OceOceInstance(scope: Construct, id: string, config: OceOceInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig">OceOceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig">OceOceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures">resetAddOnFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion">resetDrRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType">resetInstanceAccessType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType">resetInstanceLicenseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType">resetInstanceUsageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule">resetUpgradeSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain">resetWafPrimaryDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: OceOceInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---

##### `resetAddOnFeatures` <a name="resetAddOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures"></a>

```typescript
public resetAddOnFeatures(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDrRegion` <a name="resetDrRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion"></a>

```typescript
public resetDrRegion(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceAccessType` <a name="resetInstanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType"></a>

```typescript
public resetInstanceAccessType(): void
```

##### `resetInstanceLicenseType` <a name="resetInstanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType"></a>

```typescript
public resetInstanceLicenseType(): void
```

##### `resetInstanceUsageType` <a name="resetInstanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType"></a>

```typescript
public resetInstanceUsageType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradeSchedule` <a name="resetUpgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule"></a>

```typescript
public resetUpgradeSchedule(): void
```

##### `resetWafPrimaryDomain` <a name="resetWafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain"></a>

```typescript
public resetWafPrimaryDomain(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

oceOceInstance.OceOceInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

oceOceInstance.OceOceInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

oceOceInstance.OceOceInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

oceOceInstance.OceOceInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceOceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceOceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceOceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy">idcsTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service">service</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput">addOnFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput">adminEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput">drRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput">idcsAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput">instanceAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput">instanceLicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput">instanceUsageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput">objectStorageNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput">tenancyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput">upgradeScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput">wafPrimaryDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures">addOnFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail">adminEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion">drRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType">instanceAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType">instanceLicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType">instanceUsageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName">tenancyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule">upgradeSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain">wafPrimaryDomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `idcsTenancy`<sup>Required</sup> <a name="idcsTenancy" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy"></a>

```typescript
public readonly idcsTenancy: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service"></a>

```typescript
public readonly service: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts"></a>

```typescript
public readonly timeouts: OceOceInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `addOnFeaturesInput`<sup>Optional</sup> <a name="addOnFeaturesInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput"></a>

```typescript
public readonly addOnFeaturesInput: string[];
```

- *Type:* string[]

---

##### `adminEmailInput`<sup>Optional</sup> <a name="adminEmailInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput"></a>

```typescript
public readonly adminEmailInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `drRegionInput`<sup>Optional</sup> <a name="drRegionInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput"></a>

```typescript
public readonly drRegionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idcsAccessTokenInput`<sup>Optional</sup> <a name="idcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput"></a>

```typescript
public readonly idcsAccessTokenInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceAccessTypeInput`<sup>Optional</sup> <a name="instanceAccessTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput"></a>

```typescript
public readonly instanceAccessTypeInput: string;
```

- *Type:* string

---

##### `instanceLicenseTypeInput`<sup>Optional</sup> <a name="instanceLicenseTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput"></a>

```typescript
public readonly instanceLicenseTypeInput: string;
```

- *Type:* string

---

##### `instanceUsageTypeInput`<sup>Optional</sup> <a name="instanceUsageTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput"></a>

```typescript
public readonly instanceUsageTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectStorageNamespaceInput`<sup>Optional</sup> <a name="objectStorageNamespaceInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput"></a>

```typescript
public readonly objectStorageNamespaceInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `tenancyNameInput`<sup>Optional</sup> <a name="tenancyNameInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput"></a>

```typescript
public readonly tenancyNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OceOceInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---

##### `upgradeScheduleInput`<sup>Optional</sup> <a name="upgradeScheduleInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput"></a>

```typescript
public readonly upgradeScheduleInput: string;
```

- *Type:* string

---

##### `wafPrimaryDomainInput`<sup>Optional</sup> <a name="wafPrimaryDomainInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput"></a>

```typescript
public readonly wafPrimaryDomainInput: string;
```

- *Type:* string

---

##### `addOnFeatures`<sup>Required</sup> <a name="addOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures"></a>

```typescript
public readonly addOnFeatures: string[];
```

- *Type:* string[]

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail"></a>

```typescript
public readonly adminEmail: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `drRegion`<sup>Required</sup> <a name="drRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion"></a>

```typescript
public readonly drRegion: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

---

##### `instanceAccessType`<sup>Required</sup> <a name="instanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType"></a>

```typescript
public readonly instanceAccessType: string;
```

- *Type:* string

---

##### `instanceLicenseType`<sup>Required</sup> <a name="instanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType"></a>

```typescript
public readonly instanceLicenseType: string;
```

- *Type:* string

---

##### `instanceUsageType`<sup>Required</sup> <a name="instanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType"></a>

```typescript
public readonly instanceUsageType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace"></a>

```typescript
public readonly objectStorageNamespace: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName"></a>

```typescript
public readonly tenancyName: string;
```

- *Type:* string

---

##### `upgradeSchedule`<sup>Required</sup> <a name="upgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule"></a>

```typescript
public readonly upgradeSchedule: string;
```

- *Type:* string

---

##### `wafPrimaryDomain`<sup>Required</sup> <a name="wafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain"></a>

```typescript
public readonly wafPrimaryDomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceOceInstanceConfig <a name="OceOceInstanceConfig" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.Initializer"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

const oceOceInstanceConfig: oceOceInstance.OceOceInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail">adminEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName">tenancyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures">addOnFeatures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion">drRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType">instanceAccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType">instanceLicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType">instanceUsageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule">upgradeSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain">wafPrimaryDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail"></a>

```typescript
public readonly adminEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}.

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}.

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace"></a>

```typescript
public readonly objectStorageNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}.

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName"></a>

```typescript
public readonly tenancyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}.

---

##### `addOnFeatures`<sup>Optional</sup> <a name="addOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures"></a>

```typescript
public readonly addOnFeatures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}.

---

##### `drRegion`<sup>Optional</sup> <a name="drRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion"></a>

```typescript
public readonly drRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceAccessType`<sup>Optional</sup> <a name="instanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType"></a>

```typescript
public readonly instanceAccessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}.

---

##### `instanceLicenseType`<sup>Optional</sup> <a name="instanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType"></a>

```typescript
public readonly instanceLicenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}.

---

##### `instanceUsageType`<sup>Optional</sup> <a name="instanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType"></a>

```typescript
public readonly instanceUsageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OceOceInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}

---

##### `upgradeSchedule`<sup>Optional</sup> <a name="upgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule"></a>

```typescript
public readonly upgradeSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}.

---

##### `wafPrimaryDomain`<sup>Optional</sup> <a name="wafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain"></a>

```typescript
public readonly wafPrimaryDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}.

---

### OceOceInstanceTimeouts <a name="OceOceInstanceTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.Initializer"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

const oceOceInstanceTimeouts: oceOceInstance.OceOceInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceOceInstanceTimeoutsOutputReference <a name="OceOceInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { oceOceInstance } from 'rhizo-co-terraform-provider-oci'

new oceOceInstance.OceOceInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceOceInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---



